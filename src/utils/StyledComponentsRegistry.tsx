'use client';

import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import theme from '@/styles/theme';

interface StyledComponentsRegistryProps {
  children: React.ReactNode;
}

export default function StyledComponentsRegistry({ children }: StyledComponentsRegistryProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      {children}
    </StyleSheetManager>
  );
}
