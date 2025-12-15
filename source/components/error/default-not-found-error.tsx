import { Link, useRouter } from '@tanstack/react-router';

import { HomeIcon, UndoIcon } from 'lucide-react';

import {
  Failure,
  FailureContent,
  FailureFooter,
  FailureHeader,
} from '~/components/shared/fallback.tsx';
import { Button } from '~/components/ui/button.tsx';

function DefaultNotFoundError(): React.ReactNode {
  const router = useRouter();

  function handleOnClickGoToPreviousPage() {
    return router.history.back();
  }

  return (
    <Failure>
      <FailureHeader code={404} />
      <FailureContent title='Page Not Found'>
        <span className='text-pretty'>
          Looks like this page stepped out for some coffee... and forgot to
          leave a forwarding address. ☕
        </span>
        <br />
        <br />
        <span className='text-primary font-semibold'>Try checking the url</span>
        <span> — we'll keep the porch light on for you.</span>
      </FailureContent>
      <FailureFooter>
        <Button asChild>
          <Link to='/'>
            <HomeIcon />
            <span>No, Take Me Home</span>
          </Link>
        </Button>
        <Button variant='secondary' onClick={handleOnClickGoToPreviousPage}>
          <UndoIcon />
          <span>Go Back</span>
        </Button>
      </FailureFooter>
    </Failure>
  );
}

export { DefaultNotFoundError };
