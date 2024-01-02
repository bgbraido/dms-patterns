
import { s32rdsApp, s32s3App } from './test-apps';

test('S32Rds app can be synthesized', () => {
  s32rdsApp.synth();
});

test('S32S3 app can be synthesized', () => {
  s32s3App.synth();
});
