import {superTableFilters} from '../components/super-table/util/super-table-filters';
import {superTableSorters} from '../components/super-table/util/super-table-sorters';

export class GroupJoinRequestsGridColumns {

  public static readonly superTableColumns = [
    {
      id: 'userRegisteredServiceName',
      key: 'userRegisteredServiceName',
      label: 'User Registered Service Name',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING,
      isEnabled: true
    },
    {
      id: 'proposedUnitOfWorkType',
      key: 'proposedUnitOfWorkType',
      label: 'Proposed UnitOfWorkType',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING,
      isEnabled: true
    },
    {
      id: 'proposedUnitOfWorkCost',
      key: 'proposedUnitOfWorkCost',
      label: 'Proposed unit of work cost',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING,
      isEnabled: true
    }
  ];

}
