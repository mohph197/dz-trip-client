import { useAuthHandler } from '@/hooks/AuthHandler';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

const GoogleButton: FunctionComponent = () => {
	const signInButtonRef = useRef<HTMLDivElement>(null);
	const { loading, handleCredentialsResponse } = useAuthHandler();
	const [buttonError, setButtonError] = useState<boolean>(false);

	useEffect(() => {
		try {
			const google = (window as any).google;
			google.accounts.id.initialize({
				client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
				callback: handleCredentialsResponse,
				auto_select: true,
			});
			google.accounts.id.prompt((notification: any) => {
				if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
					if (signInButtonRef)
						google.accounts.id.renderButton(signInButtonRef.current, {
							text: 'continue_with',
							shape: 'pill',
							size: 'large',
						});
				} else {
				}
			});
		} catch (e) {
			console.log(e);
			setButtonError(true);
		}
	}, []);

	return (
		<>
			{loading ? (
				<h1>Loading Google!</h1>
			) : (
				<div className='flex justify-center' ref={signInButtonRef}>
					{buttonError && (
						<h3 className='font-medium bg-text-red text-white p-2 rounded-lg'>
							Error Rendering Google Button
						</h3>
					)}
				</div>
			)}
		</>
	);
};

export default GoogleButton;
