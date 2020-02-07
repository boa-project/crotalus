const getSizeLabel = (size: string) => {
  if (size === 'original') {
    return 'Original';
  } else {
    switch (size) {
      case 'medium.png':
        return 'Mediano';

      case 'small.png':
        return 'Pequeño';

      case 'thumb.png':
        return 'Miniatura';

      case 'preview.gif':
        return 'Vista previa';

      default:
        break;
    }
  }
};

export default getSizeLabel;
