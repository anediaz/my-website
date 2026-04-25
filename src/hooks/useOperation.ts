import { useCallback, useRef } from 'react';

interface StartOptions {
  context?: Record<string, unknown>;
}

export const useOperation = ({ operationName }: { operationName: string }) => {
  const vitalRef = useRef<unknown>(null);

  const onStartOperation = useCallback((options?: StartOptions) => {
    vitalRef.current = window.DD_RUM?.startDurationVital?.(operationName, { context: options?.context });
  }, [operationName]);

  const onSucceedOperation = useCallback((updatedContext?: Record<string, unknown>) => {
    window.DD_RUM?.stopDurationVital?.(vitalRef.current ?? operationName, {
      context: { ...updatedContext, status: 'success' },
    });
  }, [operationName]);

  const onFailOperation = useCallback((
    failureReason?: 'error' | 'abandoned' | 'other',
    updatedContext?: Record<string, unknown>,
  ) => {
    window.DD_RUM?.stopDurationVital?.(vitalRef.current ?? operationName, {
      context: { ...updatedContext, status: 'failed', failureReason },
    });
  }, [operationName]);

  return { onStartOperation, onSucceedOperation, onFailOperation };
};
