export interface RecoveryAudioTrack {
  id: string;
  title: string;
  displayName: string;
  source: "WEB_CACHE" | "RECOVERED_FILE";
  expectedFile: string;
  path: string;
}

export const recoveryAudioTracks: RecoveryAudioTrack[] = [
  { id: "window_rain", title: "Window Rain", displayName: "Window Rain", source: "WEB_CACHE", expectedFile: "window_rain.mp3", path: "/assets/audio/window_rain.mp3" },
  { id: "track02", title: "track02", displayName: "track02.mp3", source: "RECOVERED_FILE", expectedFile: "track02.mp3", path: "/assets/audio/track02.mp3" },
  { id: "untitled", title: "untitled", displayName: "untitled.mp3", source: "RECOVERED_FILE", expectedFile: "untitled.mp3", path: "/assets/audio/untitled.mp3" },
  { id: "bus_window", title: "公交窗户录音", displayName: "bus_window.wav", source: "RECOVERED_FILE", expectedFile: "bus_window.wav", path: "/assets/audio/bus_window.wav" },
];
