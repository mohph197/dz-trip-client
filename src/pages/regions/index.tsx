import Regions from '@/sections/regions/regionDetails';

import { NextPage } from 'next';
import OperationsLayout from "@/components/shared/OperationsLayout";
const RegionsDetails: NextPage = () => {
	return (
		<div className='w-full pb-10 md:pb-24 bg-[#F5F5F5]'>
            <OperationsLayout pageName='regions' className='h-screen overflow-hidden'>
            </OperationsLayout>

            <Regions />
		</div>
	);
}

export default RegionsDetails;