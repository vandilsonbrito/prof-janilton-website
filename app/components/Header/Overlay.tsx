'use client'
import PropTypes from 'prop-types';

export default function Overlay({ className }: {className: string}) {
  return (
    <div className={className}></div>
  )
}

Overlay.propTypes = {
    className: PropTypes.string.isRequired
}
