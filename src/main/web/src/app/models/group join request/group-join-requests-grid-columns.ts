import {superTableFilters} from '../../components/super-table/util/super-table-filters';
import {superTableSorters} from '../../components/super-table/util/super-table-sorters';

export class GroupJoinRequestsGridColumns {

  public static readonly superTableColumns = [
    {
      id: 'obligationGroupId',
      key: 'obligationGroupId',
      label: 'Obligation group Id',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING,
      isEnabled: true
    },
    {
      id: 'userRegisteredServiceId',
      key: 'userRegisteredServiceId',
      label: 'User Registered Service Id',
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
