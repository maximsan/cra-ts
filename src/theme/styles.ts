export const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: 'body',
      color: 'rgba(255, 255, 255, 0.92)',
      bg: '#1A202C',
      transition: 'background-color 0.2s',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: 'rgba(255, 255, 255, 0.24)',
    },
    '*, *::before, &::after': {
      borderColor: 'rgba(255, 255, 255, 0.16)',
      wordWrap: 'break-word',
    },
  }),
};
