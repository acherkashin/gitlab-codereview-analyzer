import React from 'react';

export interface BaseChartTooltipProps {
  color: string;
}

export function BaseChartTooltip({ color, children }: React.PropsWithChildren<BaseChartTooltipProps>) {
  return (
    <div
      style={{
        background: 'white',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: 2,
        boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 2px',
        padding: '5px 9px',
      }}
    >
      <div style={{ whiteSpace: 'pre', display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            display: 'block',
            width: 12,
            height: 12,
            background: color,
            marginRight: 7,
          }}
        ></span>
        {children}
      </div>
    </div>
  );
}
