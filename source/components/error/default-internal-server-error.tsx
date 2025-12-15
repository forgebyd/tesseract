import { Link, type ErrorComponentProps } from '@tanstack/react-router';

import { HomeIcon } from 'lucide-react';

import {
  Failure,
  FailureContent,
  FailureDetail,
  FailureFooter,
  FailureHeader,
} from '~/components/shared/fallback.tsx';
import { Button } from '~/components/ui/button.tsx';

function DefaultInternalServerError({
  error,
}: ErrorComponentProps): React.ReactNode {
  return (
    <Failure>
      <FailureHeader code={500} />
      <FailureContent title='Oops, Our Bad'>
        <span className='text-pretty'>
          Something went sideways on our end... no hamsters were harmed, but one
          is filing a formal complaint. 🐹
        </span>
        <br />
        <br />
        <span className='text-primary font-semibold'>
          In the meantime, go back home
        </span>
        <span> — it's calmer there.</span>
      </FailureContent>
      <FailureFooter>
        <Button asChild>
          <Link to='/'>
            <HomeIcon />
            <span>Alright... Take Me Back</span>
          </Link>
        </Button>
      </FailureFooter>
      <FailureDetail error={error} />
    </Failure>
  );
}

export { DefaultInternalServerError };
