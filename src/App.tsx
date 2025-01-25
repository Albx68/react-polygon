import { Polygon } from "../lib/components/polygon/index.tsx"

const App = () => {

  return <div style={{ display: "flex", width: 400, height: 400, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
    <Polygon sides={3} size={40} strokeWidth={18} strokeLinecap="round" strokeLinejoin="round" />

  </div>
}

export default App
