import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [topic, setTopic] = useState();

  function handleSelect(selectedButton) {
    setTopic(selectedButton);
    // setTopic is scheduled to execute after App finished re-rendering
    // console.log(topic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={topic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={topic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={topic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={topic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {!topic && <p>Please select a topic</p>}
      {topic && (
        <div id="tab-content">
          <h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>{EXAMPLES[topic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
