import { useInfiniteQuery, useMutation } from 'react-query';
import { useContext, useMemo } from 'react';
import Button from '@/components/Button';
import GoogleDriveSelection from '@/pages/data/google-drive/components/GoogleDriveSelection';
import { GDDataSourceRequestDto } from '@my-monorepo/shared';
import { SelectedFiles } from '@/pages/data/google-drive/[id]';
import apiInstance from '@/helpers/api';
import styles from './styles.module.scss'