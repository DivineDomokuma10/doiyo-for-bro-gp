'use client';

import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Theme from './theme';
import styled from 'styled-components';
import { carnero } from './utils/fonts';
import StyledComponentsRegistry from './registry';

const queryClient = new QueryClient();

const AppBody = styled.body`
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppBody className={carnero.className}>
        <StyledComponentsRegistry>
          <Theme>
            <QueryClientProvider client={queryClient}>
              <SnackbarProvider>{children}</SnackbarProvider>
            </QueryClientProvider>
          </Theme>
        </StyledComponentsRegistry>
      </AppBody>
    </html>
  );
}
