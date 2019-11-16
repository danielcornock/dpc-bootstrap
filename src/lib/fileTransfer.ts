import { ncp } from 'ncp';
import { appRoot } from '../appRoot';

export const fileTransfer = (
  fileLoc: string,
  fileDest: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    ncp(appRoot + fileLoc, fileDest, err => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(fileDest);
      }
    });
  });
};
