import { useCallback, useEffect, useState } from "react";
import airtable from "airtable";

type Match = {
  id: number;
  player1: string;
  player2: string;
  player1Score: number;
  player2Score: number;
  createdAt: Date;
};

type SaveMatchArgs = Omit<Match, "id" | "createdAt">;

export default function usePingPong() {
  airtable.configure({ apiKey: "key9e72IGg8gkDfgj" });

  const base = airtable.base("apprDIbe8Bj6WXVGr")("Matches");

  const [loading, setLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<Match[]>([]);

  const saveMatch = useCallback(
    async ({ player1, player2, player1Score, player2Score }: SaveMatchArgs) => {
      setLoading(true);
      await base.create([
        {
          fields: {
            "Player 1": player1,
            "Player 2": player2,
            "Player 1 Score": player1Score,
            "Player 2 Score": player2Score,
          },
        },
      ]);
      await getMatches();
    },
    []
  );

  const getMatches = useCallback(async () => {
    setLoading(true);
    const records = await base
      .select({
        maxRecords: 50,
        sort: [{ field: "Created", direction: "desc" }],
      })
      .all();

    setMatches(
      records.map((record) => ({
        id: Number(record.fields["ID"]),
        player1: record.fields["Player 1"] as string,
        player2: record.fields["Player 2"] as string,
        player1Score: Number(record.fields["Player 1 Score"]),
        player2Score: Number(record.fields["Player 2 Score"]),
        createdAt: new Date(record.fields["Created"] as string),
      }))
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    getMatches();
  }, []);

  return { saveMatch, matches, loading };
}
