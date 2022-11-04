import pit from '/images/avocados/pit.svg'
import styles from './App.css'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'

export default function App() {
  const bind = useDrag(handleDrag, {
    from: _ => [spring.x.get(), spring.y.get()]
  })

  const [spring, api] = useSpring(() => ({ x: 0, y: 0 }))

  return (
    <div className={styles.component}>
      <div className={styles.avocado}>
        <animated.img {...bind()}
          draggable={false}
          className={styles.pit}
          src={pit}
          alt=''
          style={spring}
        />
      </div>
    </div>
  )

  /** @param {import('@use-gesture/react').DragState} state */
  function handleDrag({ offset: [x1, y1], last, distance: [x2, y2]  }) {
    const [x, y] = [x1, y1]
    if (last) api.start({ x: 0, y: 0, config: { duration: 2000 }  })
    else api.start({ x, y, config: { duration: undefined } })
  }
}
