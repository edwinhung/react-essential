import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [topic, setTopic] = useState();

  function handleSelect(selectedButton) {
    setTopic(selectedButton);
    // setTopic is scheduled to execute after App finished re-rendering
    // console.log(topic);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={topic === "components"}
          onClick={() => handleSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={topic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={topic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={topic === "state"}
          onClick={() => handleSelect("state")}
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
    </Section>
  );
}
