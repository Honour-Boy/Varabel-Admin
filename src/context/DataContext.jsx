import { createContext, useState, useContext, useEffect } from "react";

const dataContext = createContext();
const setDataContext = createContext();
const indexContext = createContext();
const setIndexContext = createContext();
const usernameContext = createContext();
const setUsernameContext = createContext();
const idContext = createContext();
const setIdContext = createContext();
const windowWidthContext = createContext();

export function useData() {
  return useContext(dataContext);
}
export function useSetData() {
  return useContext(setDataContext);
}
export function useIndex() {
  return useContext(indexContext);
}
export function useSetIndex() {
  return useContext(setIndexContext);
}
export function useUsername() {
  return useContext(usernameContext);
}
export function useSetUsername() {
  return useContext(setUsernameContext);
}
export function useId() {
  return useContext(idContext);
}
export function useSetId() {
  return useContext(setIdContext);
}
export function useWindowWidth() {
  return useContext(windowWidthContext);
}

function DataProvider({ children }) {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || null);
  const [index, setIndex] = useState(() => JSON.parse(localStorage.getItem('index')) || null);
  const [username, setUsername] = useState(() => localStorage.getItem('username') || "");
  const [id, setId] = useState(() => JSON.parse(localStorage.getItem('id')) || null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleData(val) {
    setData(val);
    localStorage.setItem('data', JSON.stringify(val));
  }

  function handleIndex(num) {
    setIndex(num);
    localStorage.setItem('index', JSON.stringify(num));
  }

  function handleId(num) {
    setId(num);
    localStorage.setItem('id', JSON.stringify(num));
  }

  function handleUsername(name) {
    setUsername(name);
    localStorage.setItem('username', name);
  }

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <dataContext.Provider value={data}>
      <setDataContext.Provider value={handleData}>
        <indexContext.Provider value={index}>
          <setIndexContext.Provider value={handleIndex}>
            <usernameContext.Provider value={username}>
              <setUsernameContext.Provider value={handleUsername}>
                <windowWidthContext.Provider value={windowWidth}>
                  <idContext.Provider value={id}>
                    <setIdContext.Provider value={handleId}>
                      {children}
                    </setIdContext.Provider>
                  </idContext.Provider>
                </windowWidthContext.Provider>
              </setUsernameContext.Provider>
            </usernameContext.Provider>
          </setIndexContext.Provider>
        </indexContext.Provider>
      </setDataContext.Provider>
    </dataContext.Provider>
  );
}

export default DataProvider;
