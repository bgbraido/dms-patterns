
import * as cdk from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { s32rdsStack, s32s3Stack } from './test-apps';


test.each([s32rdsStack, s32s3Stack])('S32Rds CDK Nag tests', (stack) => {
  cdk.Aspects.of(stack).add(new AwsSolutionsChecks({ verbose: true }));

  NagSuppressions.addStackSuppressions(stack, [
    {
      id: 'AwsSolutions-S1',
      reason: 'S3 bucket is used for testing purposes',
    },
    {
      id: 'AwsSolutions-S10',
      reason: 'S3 bucket is used for testing purposes',
    },
  ]);

  const warnings = Annotations.fromStack(stack).findWarning(
    '*',
    Match.stringLikeRegexp('AwsSolutions-.*'),
  );
  expect(warnings).toHaveLength(0);

  const errors = Annotations.fromStack(stack).findError(
    '*',
    Match.stringLikeRegexp('AwsSolutions-.*'),
  );
  expect(errors).toHaveLength(0);
});
