create user 'node'@'%'
identified by '12341234';

grant all privileges on *.*
to 'node'@'%';

drop user 'node'@'%';

use nodeDB;

create user 'node'@'%'
identified by '12341234';

grant all on *.* to 'node'@'%' identifield by
