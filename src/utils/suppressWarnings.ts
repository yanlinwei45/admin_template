/**
 * 抑制特定的控制台警告
 */
export const suppressWarnings = () => {
  // 只在开发环境中抑制警告
  if (import.meta.env.DEV) {
    const originalWarn = console.warn;
    const originalError = console.error;

    // 需要抑制的警告列表
    const suppressedWarnings = [
      'antd v5 support React is 16 ~ 18',
      'Warning: [antd: compatible]'
    ];

    console.warn = (...args) => {
      const message = args[0]?.toString() || '';
      const shouldSuppress = suppressedWarnings.some(warning => 
        message.includes(warning)
      );
      
      if (!shouldSuppress) {
        originalWarn.apply(console, args);
      }
    };

    console.error = (...args) => {
      const message = args[0]?.toString() || '';
      const shouldSuppress = suppressedWarnings.some(warning => 
        message.includes(warning)
      );
      
      if (!shouldSuppress) {
        originalError.apply(console, args);
      }
    };
  }
};

export default suppressWarnings; 