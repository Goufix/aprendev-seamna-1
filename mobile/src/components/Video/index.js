import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { ScreenOrientation } from "expo";
import { WebView } from "react-native-webview";

export function Main({ navigation }) {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
    }
    changeScreenOrientation();
  });
  return (
    <>
      <StatusBar hidden={true} />
      <WebView
        source={{
          uri:
            "https://player2.seuseriado.com/player/p.php?mode=11&1080p=dDFvRm1DeTk1NmxFeTBpbHNBVXlqQWcrMWttUm1WK2NNR0dDZ0dEM0ZaYz0=&pos=0&newp=VVZZVjRTazF0aHVNTUNBQ2I5bGVVRlJCakxCVUdnbklKenp4eVIyTTdPL0xwY2dOZ280VXdqSlJQWHVDTndZbU1HZDlTV0dQYkdiblAzOHFGN3ZRcEtFNDBwS3BTclBzeWwvdDZ4MGNEekU9&c=https://image.tmdb.org/t/p/original/o6tZ78p0qemupPaztrULV2xfwcW.jpg&prott=maria&k=&t="
        }}
      />
    </>
  );
}
