import React from 'react'

export default function BoldZanga({ text }: { text: string }) {
  const parts = text.split('Zanga')
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <strong>Zanga</strong>}
        </React.Fragment>
      ))}
    </>
  )
}
