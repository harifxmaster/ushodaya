// Declare CSS modules so TypeScript can import .css files
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
