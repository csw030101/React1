import Gallery from "./components/Gallery"
import NamedComponentTest from "./components/NamedComponentTest"
import ParentComp from "./components/ParentComp"
import UseJsx from "./components/UseJsx"
import ChildComp from "./components/ChildComp"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import NameCard from "./components/NameCard"
import SpreadComp from "./components/SpreadComp"

export default function App() {
  return (
    <>
      {/* <NamedComponentTest />
      <Gallery /> */}

      {/* <UseJsx /> */}

      <ChildComp imageInfo={{src: reactLogo, alt: "React1",}} />
      <ChildComp imageInfo={{src: reactLogo, alt: "React1",}} width={100} height={100}/>
      <ChildComp imageInfo={{src: viteLogo, alt: "React2",}} width={100} height={100}/>
      <SpreadComp />
    </>
  )
}
