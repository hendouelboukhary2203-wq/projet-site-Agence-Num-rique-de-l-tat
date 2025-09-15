'use client'; // ← Obligatoire

import React from 'react';

export default function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: 'auto' }}>

      <button type="submit" style={{ marginRight: '0.3rem' }}>🔍</button>
    </form>
  );
}("/2.jpg");

