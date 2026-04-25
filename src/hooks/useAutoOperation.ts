import { useEffect } from 'react';
import { useOperation } from './useOperation';

interface UseAutoOperationOptions {
  operationName: string;
  initialContext?: Record<string, unknown>;
  isEnabled?: boolean;
}

export const useAutoOperation = ({
  operationName,
  initialContext,
  isEnabled = true,
}: UseAutoOperationOptions) => {
  const { onStartOperation, onSucceedOperation, onFailOperation } = useOperation({ operationName });

  useEffect(() => {
    if (isEnabled) {
      onStartOperation({ context: initialContext });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { onSucceedOperation, onFailOperation };
};
