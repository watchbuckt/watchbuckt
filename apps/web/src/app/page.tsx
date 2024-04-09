'use client';

import { Button } from '@core-app/components';

export default function Web() {
  return (
    <div className="">
      <h1>Web</h1>
      <Button
        title="a button"
        onPress={() => {
          console.log('hi');
        }}
      />
    </div>
  );
}
