import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#171716',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#B89A5A',
          fontFamily: 'serif',
          fontSize: 22,
          fontWeight: 300,
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
