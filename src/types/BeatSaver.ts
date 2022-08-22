export type BeatSaver = {
    id: String;
    metadata: {
        bpm: Float32Array;
        songName: string;
        songSubName: string;
        songAuthorName: string;
        levelAuthorName: string;
    };
    versions: [
    {
        diffs: [
        {
            nps: Float32Array;
            difficulty: string;
            stars: Float32Array;
        }
        ];
        coverURL: string; 
    }
    ];
};
