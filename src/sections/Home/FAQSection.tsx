import FAQLine from '@/components/Home/FAQLine';
import PageSection from '@/components/shared/PageSection';
import { faq } from '@/config/consts';
import { FunctionComponent } from 'react';

const FAQSection: FunctionComponent = () => {
	return (
		<PageSection name='faq' title='FAQ' className='gap-10'>
			<div className='self-center border border-text-blackGray shadow w-[min(1024px,80vw)] rounded-xl overflow-hidden'>
				{faq.map((line, index) => (
					<FAQLine key={index} index={index} {...line} />
				))}
			</div>
		</PageSection>
	);
};

export default FAQSection;
