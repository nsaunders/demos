import type { ReactNode } from "react";
import { mergeStyles, on } from "./css";
import { cycle } from "./cycle";

function Panel({ children }: { children?: ReactNode }) {
  return (
    <section
      style={mergeStyles(
        {
          background: "#595561",
          color: "#f8f2ff",
          boxShadow: "inset 0 0 0 2px #03010580, 0 0 0 2px #03010580",
          minWidth: 400,
          display: "grid",
          padding: 24,
          gap: 24,
          placeItems: "stretch",
        },
        on("%primary", { background: "#885bc0" }),
        on("%secondary", { background: "#406dde" }),
        on("%tertiary", { background: "#b64096" }),
        cycle("%primary", "%secondary", "%tertiary"),
      )}
    >
      <div style={{ textAlign: "center" }}>Panel</div>
      {children}
    </section>
  );
}

export function App() {
  return (
    <main>
      <Panel>
        <Panel>
          <Panel>
            <Panel />
          </Panel>
        </Panel>
      </Panel>
    </main>
  );
}
