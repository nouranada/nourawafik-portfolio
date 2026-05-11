import { ImageResponse } from 'next/og';
import { interFont } from '@/lib/og-fonts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [inter400, inter500] = await Promise.all([interFont(400), interFont(500)]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#FAFAF9',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 400, fontSize: 13, color: '#9CA3AF', letterSpacing: '0.06em' }}>
          nourawafik.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: 80,
              color: '#1F2937',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Noura Wafik
          </div>
          <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 400, fontSize: 36, color: '#374151', lineHeight: 1.4 }}>
            Product Designer
          </div>
        </div>

        <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 400, fontSize: 13, color: '#9CA3AF', letterSpacing: '0.04em' }}>
          Bilingual (Arabic/English) · Based in Cairo
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
        { name: 'Inter', data: inter500, weight: 500, style: 'normal' },
      ],
    }
  );
}
