import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  // 테스트 케이스(상황)
  test('정상적으로 화면에 렌더링 됩니다.', () => {
    render(<ToggleButton onText={1} offText={0} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    cleanup();
  });

  test('기본적으로 `offText` prop의 값 표시됩니다.', () => {
    render(<ToggleButton onText={1} offText={0} />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('0');
    cleanup();
  });

  test.skip('사용자가 컴포넌트를 클릭하면 `onText` prop 값이 표시됩니다.', () => {});
});
