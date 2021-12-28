import React from 'react'
import RenderComponent from './RenderComponent'

export default function RenderComponents({ items, onChange, formData }) {
  return (
    <div>
      {items.map((item) => (
        <RenderComponent key = {item.name} item={item} onChange={onChange} formData={formData} />
      ))}
    </div>
  );
}
