/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "./components/stripe/BuyButtonComponent.jsx" {
  const BuyButtonComponent: React.FC;
  export default BuyButtonComponent;
}
// custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "stripe-buy-button": any; // Vous pouvez spécifier un type plus précis si nécessaire
  }
}
