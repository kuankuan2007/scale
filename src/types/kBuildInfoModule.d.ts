declare module 'visual:k-build-info' {
  const buildInfo: {
    buildTime: number;
    meta: {
      viteVersion: string;
      rollupVersion: string;
      rolldownVersion?: string;
    };
    mode: string;
    git: {
      branch: string;
      lastCommit: {
        time: number;
        message: string;
        author: string;
        id: string;
        fullId: string;
      };
    };
    os: {
      platform: string;
      release: string;
      arch: string;
      node: string;
    };
  };
  export default buildInfo;
  export const show: { title: string; content: string; url?: string }[];
}
