const getSizeLabel = (alternate: string) => {
  if (alternate === 'original') {
    return 'Original';
  } else {
    const size = alternate.split('.')[0];
    switch (size) {
      case 'medium':
        return 'Mediano';

      case 'small':
        return 'Pequeño';

      case 'thumb':
        return 'Miniatura';

      case 'high':
        return 'HD';

      case 'preview':
        return 'Vista previa';

      default:
        return alternate;
    }
  }
};

export default getSizeLabel;
