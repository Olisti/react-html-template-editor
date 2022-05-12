import React, { VFC } from 'react';

export const FrameHead: VFC = () => (
  <>
    <meta charSet="utf-8" />
    <title>Preview</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <base target="_parent" />
    <style>{`body { margin: 0 }
.editor-block:hover:not(.editor-block__selected) { outline: 2px solid #93C2F0 }
.editor-block__selected { outline: 2px solid #2B6CB0 }`}</style>
  </>
);
