declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

interface Window {
  grecaptcha: {
    execute(siteKey: string, options: { action: string }): Promise<string>;
    ready(callback: () => void): void;
  };
}
