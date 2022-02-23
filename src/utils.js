import * as React from 'react'

/**
 *
 * @param {Number} selection - The current tab selected. 0 = No tab selected
 * @param {Array(Object)} tabs - The tabs' details
 * @param {String} buttonClass, returnButtonClass - The css styles for tab buttons
 * @param {Function} onClick - The function to be called on click of tab
 */
function MultipleTabs(props) {
  return (
    <>
      {props.selection === 0 ? (
        <div>
          <h2 className="tabsPageTitle">{props.title}</h2>
          <hr></hr>
          {
            props.tabs.map((tabItem, index) => (
              <button className={props.buttonClass} onClick={() => props.onClick(index+1)}>{tabItem.displayName}</button>
            ))
          }

        </div> 
      ) : 
      <button className={props.returnButtonClass} onClick={() => props.onClick(0)} >{props.returnDisplay}</button>
      }

      {
        props.tabs.map((tabItem, index) => (
          props.selection === (index + 1) && tabItem.displayComponent
        ))
      }
    </>
  );
}

export {MultipleTabs}


/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */

function useLocalStorageState(
  key,
  defaultValue = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export {useLocalStorageState}
