import { useContext } from 'react';
import SelectionArea, { SelectionEvent } from '@viselect/react';
import styles from '@/pages/data/google-drive/styles.module.scss';
import { SelectedFiles } from '@/pages/data/google-drive/[id]';
import GoogleDriveItem from '@/pages/data/google-drive/components/GoogleDriveItem';

const GoogleDriveNavigation = ({ items }: { items: any[] }) => {
  const extractIds = (els: Element[]): string[] =>
    els
      .map((v) => v.getAttribute('data-key'))
      .filter(Boolean)
      .map(String);

  const [selected, setSelected] = useContext(SelectedFiles);

  console.log(selected);
  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelected(() => new Set());
    }
  };

  const onMove =