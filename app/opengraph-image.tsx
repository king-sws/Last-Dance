import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "80px 96px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#ffe1c1",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name.split(" ")[0]}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#ffe1c1",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #27272a",
            paddingTop: 32,
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          <span>{siteConfig.url.replace("https://", "")}</span>
          <span style={{ color: "#ffe1c1" }}>React · Next.js · Node.js</span>
        </div>
      </div>
    ),
    size
  );
}
