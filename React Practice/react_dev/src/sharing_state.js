import { useState } from 'react';

/*
function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}
*/

//Step 1: Remove state from the child components
function Panel({ title, children , isActive , onShow}) {
    return (
        <>
      <section>
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow}>
            Show
          </button>
        )}
      </section>
      </>
    );
  }

export default function Parent() {
    const [activeIndex , setActiveIndex] = useState(0) //activeIndex is 0, the first panel is active

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      {/* Step 2: Pass hardcoded data from the common parent  */}
      <Panel title="About" 
      isActive= {activeIndex === 0}
      onShow={() => setActiveIndex(0)}
     >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel 
      title="Etymology" 
      isActive={activeIndex === 1}
        onShow={()=>setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the 
      </Panel>
    </>
  );
}

export {Panel};