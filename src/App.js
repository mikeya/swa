import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import { breakpoints, colors, fonts } from "./constants";
import Landing from "./layout/Landing";
import collegiate from "./assets/collegiate.ttf";
import lato from "./assets/lato.regular.ttf";
import About from "./layout/About";
import Yoga from "./layout/Yoga";
import Strength from "./layout/Strength";
import Services from "./layout/Services";
import Testimonials from "./layout/Testimonials";
import Footer from "./layout/Footer";

function App() {
  return (
    <div style={{ isolation: "isolate", overflow: "hidden" }}>
      <GlobalStyle />
      <Navbar />
      <Landing />
      <About />
      <Yoga />
      <Strength />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
const GlobalStyle = createGlobalStyle`




  @font-face {
  font-family: Collegiate;
  src: url(${collegiate});
}
@font-face {
  font-family: Lato;
  src: url(${lato});
}
html {
  --font-size-text: 1.5rem;
  --font-size-subtitle: 1.75rem;
  --font-size-title: 5rem;
  @media (max-width: ${breakpoints.desktop}) {
  --font-size-text: 1.25rem;
  --font-size-subtitle: 1.5rem;
  --font-size-title: 3.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    --font-size-text: 0.75rem;
    --font-size-subtitle: 1rem;
    --font-size-title: 2rem;
  }
  scroll-behavior: smooth;
  color: ${colors.font};
  font-family: ${fonts.familyText};
  background-color: ${colors.dark};
}
p {
  font-size: ${fonts.sizeText};
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}
`;
export default App;
