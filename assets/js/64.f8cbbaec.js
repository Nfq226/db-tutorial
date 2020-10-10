(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{519:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-应用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-应用指南"}},[t._v("#")]),t._v(" Mysql 应用指南")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80sql-%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B"}},[t._v("一、SQL 执行过程")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E"}},[t._v("二、存储引擎")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%80%89%E6%8B%A9%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E"}},[t._v("选择存储引擎")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#myisam"}},[t._v("MyISAM")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#innodb"}},[t._v("InnoDB")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}},[t._v("三、数据类型")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%95%B4%E5%9E%8B"}},[t._v("整型")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%B5%AE%E7%82%B9%E5%9E%8B"}},[t._v("浮点型")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[t._v("字符串")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%97%B6%E9%97%B4%E5%92%8C%E6%97%A5%E6%9C%9F"}},[t._v("时间和日期")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#blob-%E5%92%8C-text"}},[t._v("BLOB 和 TEXT")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B"}},[t._v("枚举类型")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%80%89%E6%8B%A9"}},[t._v("类型的选择")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E7%B4%A2%E5%BC%95"}},[t._v("四、索引")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E9%94%81"}},[t._v("五、锁")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E4%BA%8B%E5%8A%A1"}},[t._v("六、事务")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%83%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96"}},[t._v("七、性能优化")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AB%E5%A4%8D%E5%88%B6"}},[t._v("八、复制")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6"}},[t._v("主从复制")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB"}},[t._v("读写分离")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B9%9D%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1"}},[t._v("九、分布式事务")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8D%81%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8"}},[t._v("十、分库分表")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BC%A0%E9%80%81%E9%97%A8"}},[t._v("传送门")])])]),t._v(" "),s("h2",{attrs:{id:"一、sql-执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、sql-执行过程"}},[t._v("#")]),t._v(" 一、SQL 执行过程")]),t._v(" "),s("p",[t._v("学习 Mysql，最好是先从宏观上了解 Mysql 工作原理。")]),t._v(" "),s("blockquote",[s("p",[t._v("参考："),s("RouterLink",{attrs:{to:"/sql/mysql/docs/sql/mysql/mysql-index.html"}},[t._v("Mysql 工作流")])],1)]),t._v(" "),s("h2",{attrs:{id:"二、存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、存储引擎"}},[t._v("#")]),t._v(" 二、存储引擎")]),t._v(" "),s("p",[t._v("在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 "),s("code",[t._v(".frm")]),t._v(" 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。"),s("strong",[t._v("不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。")])]),t._v(" "),s("h3",{attrs:{id:"选择存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择存储引擎"}},[t._v("#")]),t._v(" 选择存储引擎")]),t._v(" "),s("h4",{attrs:{id:"mysql-内置的存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-内置的存储引擎"}},[t._v("#")]),t._v(" Mysql 内置的存储引擎")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SHOW ENGINES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Engine             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Support "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Comment                                                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Transactions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" XA   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Savepoints "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" FEDERATED          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Federated MySQL storage engine                                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MEMORY             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Hash based, stored "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" memory, useful "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" temporary tables      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" InnoDB             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DEFAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Supports transactions, row-level locking, and foreign keys     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PERFORMANCE_SCHEMA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Performance Schema                                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM storage engine                                          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MRG_MYISAM         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Collection of identical MyISAM tables                          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BLACKHOLE          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" /dev/null storage engine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anything you "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" to it disappears"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV                "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV storage engine                                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ARCHIVE            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Archive storage engine                                         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" rows "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("InnoDB")]),t._v(" - Mysql 的默认事务型存储引擎，并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。")]),t._v(" "),s("li",[s("strong",[t._v("MyISAM")]),t._v(" - Mysql 5.1 版本前的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。")]),t._v(" "),s("li",[s("strong",[t._v("CSV")]),t._v(" - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。")]),t._v(" "),s("li",[s("strong",[t._v("Memory")]),t._v(" - 适合快速访问数据，且数据不会被修改，重启丢失也没有关系。")]),t._v(" "),s("li",[s("strong",[t._v("NDB")]),t._v(" - 用于 Mysql 集群场景。")])]),t._v(" "),s("h4",{attrs:{id:"如何选择合适的存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的存储引擎"}},[t._v("#")]),t._v(" 如何选择合适的存储引擎")]),t._v(" "),s("p",[t._v("大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。")]),t._v(" "),s("p",[t._v("如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：")]),t._v(" "),s("ul",[s("li",[t._v("事务：如果需要支持事务，InnoDB 是首选。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。")]),t._v(" "),s("li",[t._v("并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。")]),t._v(" "),s("li",[t._v("外键：InnoDB 支持外键。")]),t._v(" "),s("li",[t._v("备份：InnoDB 支持在线热备份。")]),t._v(" "),s("li",[t._v("崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。")]),t._v(" "),s("li",[t._v("其它特性：MyISAM 支持压缩表和空间数据索引。")])]),t._v(" "),s("h4",{attrs:{id:"转换表的存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换表的存储引擎"}},[t._v("#")]),t._v(" 转换表的存储引擎")]),t._v(" "),s("p",[t._v("下面的语句可以将 mytable 表的引擎修改为 InnoDB")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" mytable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n")])])]),s("h3",{attrs:{id:"myisam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[t._v("#")]),t._v(" MyISAM")]),t._v(" "),s("p",[t._v("MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。")]),t._v(" "),s("p",[t._v("MyISAM 引擎使用 B+Tree 作为索引结构，"),s("strong",[t._v("叶节点的 data 域存放的是数据记录的地址")]),t._v("。")]),t._v(" "),s("p",[t._v("MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。")]),t._v(" "),s("h3",{attrs:{id:"innodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),s("p",[t._v("InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。")]),t._v(" "),s("p",[t._v("然 InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而"),s("strong",[t._v("在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构")]),t._v("，这棵树的叶节点 data 域保存了完整的数据记录。这个"),s("strong",[t._v("索引的 key 是数据表的主键")]),t._v("，因此"),s("strong",[t._v("InnoDB 表数据文件本身就是主索引")]),t._v("。")]),t._v(" "),s("p",[t._v("InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。")]),t._v(" "),s("p",[t._v("InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。")]),t._v(" "),s("p",[t._v("内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。")]),t._v(" "),s("p",[t._v("支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。")]),t._v(" "),s("h2",{attrs:{id:"三、数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、数据类型"}},[t._v("#")]),t._v(" 三、数据类型")]),t._v(" "),s("h3",{attrs:{id:"整型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),s("p",[s("code",[t._v("TINYINT")]),t._v(", "),s("code",[t._v("SMALLINT")]),t._v(", "),s("code",[t._v("MEDIUMINT")]),t._v(", "),s("code",[t._v("INT")]),t._v(", "),s("code",[t._v("BIGINT")]),t._v(" 分别使用 "),s("code",[t._v("8")]),t._v(", "),s("code",[t._v("16")]),t._v(", "),s("code",[t._v("24")]),t._v(", "),s("code",[t._v("32")]),t._v(", "),s("code",[t._v("64")]),t._v(" 位存储空间，一般情况下越小的列越好。")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("UNSIGNED")]),t._v(" 表示不允许负值，大致可以使正数的上限提高一倍")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("INT(11)")]),t._v(" 中的数字只是规定了交互工具显示字符的个数，对于存储和计算来说是没有意义的。")]),t._v(" "),s("h3",{attrs:{id:"浮点型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[t._v("#")]),t._v(" 浮点型")]),t._v(" "),s("p",[s("code",[t._v("FLOAT")]),t._v(" 和 "),s("code",[t._v("DOUBLE")]),t._v(" 为浮点类型。")]),t._v(" "),s("p",[s("code",[t._v("DECIMAL")]),t._v(" 类型主要用于精确计算，代价较高，应该尽量只在对小数进行精确计算时才使用 "),s("code",[t._v("DECIMAL")]),t._v(" ——例如存储财务数据。数据量比较大的时候，可以使用 "),s("code",[t._v("BIGINT")]),t._v(" 代替 "),s("code",[t._v("DECIMAL")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("FLOAT")]),t._v("、"),s("code",[t._v("DOUBLE")]),t._v(" 和 "),s("code",[t._v("DECIMAL")]),t._v(" 都可以指定列宽，例如 "),s("code",[t._v("DECIMAL(18, 9)")]),t._v(" 表示总共 18 位，取 9 位存储小数部分，剩下 9 位存储整数部分。")]),t._v(" "),s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("p",[t._v("主要有 "),s("code",[t._v("CHAR")]),t._v(" 和 "),s("code",[t._v("VARCHAR")]),t._v(" 两种类型，一种是定长的，一种是变长的。")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("VARCHAR")]),t._v(" 这种变长类型能够节省空间，因为只需要存储必要的内容。但是在执行 UPDATE 时可能会使行变得比原来长")]),t._v("。当超出一个页所能容纳的大小时，就要执行额外的操作。MyISAM 会将行拆成不同的片段存储，而 InnoDB 则需要分裂页来使行放进页内。")]),t._v(" "),s("p",[s("code",[t._v("VARCHAR")]),t._v(" 会保留字符串末尾的空格，而 "),s("code",[t._v("CHAR")]),t._v(" 会删除。")]),t._v(" "),s("h3",{attrs:{id:"时间和日期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间和日期"}},[t._v("#")]),t._v(" 时间和日期")]),t._v(" "),s("p",[t._v("MySQL 提供了两种相似的日期时间类型："),s("code",[t._v("DATATIME")]),t._v(" 和 "),s("code",[t._v("TIMESTAMP")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"datatime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datatime"}},[t._v("#")]),t._v(" DATATIME")]),t._v(" "),s("p",[t._v("能够保存从 1001 年到 9999 年的日期和时间，精度为秒，使用 8 字节的存储空间。")]),t._v(" "),s("p",[t._v("它与时区无关。")]),t._v(" "),s("p",[t._v("默认情况下，MySQL 以一种可排序的、无歧义的格式显示 DATATIME 值，例如“2008-01-16 22:37:08”，这是 ANSI 标准定义的日期和时间表示方法。")]),t._v(" "),s("h4",{attrs:{id:"timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[t._v("#")]),t._v(" TIMESTAMP")]),t._v(" "),s("p",[t._v("和 UNIX 时间戳相同，保存从 1970 年 1 月 1 日午夜（格林威治时间）以来的秒数，使用 4 个字节，只能表示从 1970 年 到 2038 年。")]),t._v(" "),s("p",[t._v("它和时区有关，也就是说一个时间戳在不同的时区所代表的具体时间是不同的。")]),t._v(" "),s("p",[t._v("MySQL 提供了 FROM_UNIXTIME() 函数把 UNIX 时间戳转换为日期，并提供了 UNIX_TIMESTAMP() 函数把日期转换为 UNIX 时间戳。")]),t._v(" "),s("p",[t._v("默认情况下，如果插入时没有指定 TIMESTAMP 列的值，会将这个值设置为当前时间。")]),t._v(" "),s("p",[t._v("应该尽量使用 TIMESTAMP，因为它比 DATETIME 空间效率更高。")]),t._v(" "),s("h3",{attrs:{id:"blob-和-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob-和-text"}},[t._v("#")]),t._v(" BLOB 和 TEXT")]),t._v(" "),s("p",[s("code",[t._v("BLOB")]),t._v(" 和 "),s("code",[t._v("TEXT")]),t._v(" 都是为了存储大的数据而设计，前者存储二进制数据，后者存储字符串数据。")]),t._v(" "),s("p",[t._v("不能对 "),s("code",[t._v("BLOB")]),t._v(" 和 "),s("code",[t._v("TEXT")]),t._v(" 类型的全部内容进行排序、索引。")]),t._v(" "),s("h3",{attrs:{id:"枚举类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型"}},[t._v("#")]),t._v(" 枚举类型")]),t._v(" "),s("p",[t._v("大多数情况下没有使用枚举类型的必要，其中一个缺点是：枚举的字符串列表是固定的，添加和删除字符串（枚举选项）必须使用"),s("code",[t._v("ALTER TABLE")]),t._v("（如果只只是在列表末尾追加元素，不需要重建表）。")]),t._v(" "),s("h3",{attrs:{id:"类型的选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型的选择"}},[t._v("#")]),t._v(" 类型的选择")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("整数类型通常是标识列最好的选择，因为它们很快并且可以使用 "),s("code",[t._v("AUTO_INCREMENT")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ENUM")]),t._v(" 和 "),s("code",[t._v("SET")]),t._v(" 类型通常是一个糟糕的选择，应尽量避免。")])]),t._v(" "),s("li",[s("p",[t._v("应该尽量避免用字符串类型作为标识列，因为它们很消耗空间，并且通常比数字类型慢。对于 "),s("code",[t._v("MD5")]),t._v("、"),s("code",[t._v("SHA")]),t._v("、"),s("code",[t._v("UUID")]),t._v(" 这类随机字符串，由于比较随机，所以可能分布在很大的空间内，导致 "),s("code",[t._v("INSERT")]),t._v(" 以及一些 "),s("code",[t._v("SELECT")]),t._v(" 语句变得很慢。")]),t._v(" "),s("ul",[s("li",[t._v("如果存储 UUID ，应该移除 "),s("code",[t._v("-")]),t._v(" 符号；更好的做法是，用 "),s("code",[t._v("UNHEX()")]),t._v(" 函数转换 UUID 值为 16 字节的数字，并存储在一个 "),s("code",[t._v("BINARY(16)")]),t._v(" 的列中，检索时，可以通过 "),s("code",[t._v("HEX()")]),t._v(" 函数来格式化为 16 进制格式。")])])])]),t._v(" "),s("h2",{attrs:{id:"四、索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、索引"}},[t._v("#")]),t._v(" 四、索引")]),t._v(" "),s("blockquote",[s("p",[t._v("详见："),s("RouterLink",{attrs:{to:"/sql/mysql/mysql-index.html"}},[t._v("Mysql 索引")])],1)]),t._v(" "),s("h2",{attrs:{id:"五、锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、锁"}},[t._v("#")]),t._v(" 五、锁")]),t._v(" "),s("blockquote",[s("p",[t._v("详见："),s("RouterLink",{attrs:{to:"/sql/mysql/mysql-lock.html"}},[t._v("Mysql 锁")])],1)]),t._v(" "),s("h2",{attrs:{id:"六、事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、事务"}},[t._v("#")]),t._v(" 六、事务")]),t._v(" "),s("blockquote",[s("p",[t._v("详见："),s("RouterLink",{attrs:{to:"/sql/mysql/mysql-transaction.html"}},[t._v("Mysql 事务")])],1)]),t._v(" "),s("h2",{attrs:{id:"七、性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、性能优化"}},[t._v("#")]),t._v(" 七、性能优化")]),t._v(" "),s("blockquote",[s("p",[t._v("详见："),s("RouterLink",{attrs:{to:"/sql/mysql/mysql-optimization.html"}},[t._v("Mysql 性能优化")])],1)]),t._v(" "),s("h2",{attrs:{id:"八、复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、复制"}},[t._v("#")]),t._v(" 八、复制")]),t._v(" "),s("h3",{attrs:{id:"主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[t._v("#")]),t._v(" 主从复制")]),t._v(" "),s("p",[t._v("Mysql 支持两种复制：基于行的复制和基于语句的复制。")]),t._v(" "),s("p",[t._v("这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。")]),t._v(" "),s("p",[t._v("主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("binlog 线程")]),t._v(" ：负责将主服务器上的数据更改写入二进制文件（binlog）中。")]),t._v(" "),s("li",[s("strong",[t._v("I/O 线程")]),t._v(" ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。")]),t._v(" "),s("li",[s("strong",[t._v("SQL 线程")]),t._v(" ：负责读取中继日志并重放其中的 SQL 语句。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/database/mysql/master-slave.png"}})]),t._v(" "),s("h3",{attrs:{id:"读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[t._v("#")]),t._v(" 读写分离")]),t._v(" "),s("p",[t._v("主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。")]),t._v(" "),s("p",[t._v("读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。")]),t._v(" "),s("p",[t._v("MySQL 读写分离能提高性能的原因在于：")]),t._v(" "),s("ul",[s("li",[t._v("主从服务器负责各自的读和写，极大程度缓解了锁的争用；")]),t._v(" "),s("li",[t._v("从服务器可以配置 MyISAM 引擎，提升查询性能以及节约系统开销；")]),t._v(" "),s("li",[t._v("增加冗余，提高可用性。")])]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/database/mysql/master-slave-proxy.png"}})])]),t._v(" "),s("p",[t._v("（分割线）以下为高级特性，也是关系型数据库通用方案")]),t._v(" "),s("h2",{attrs:{id:"九、分布式事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、分布式事务"}},[t._v("#")]),t._v(" 九、分布式事务")]),t._v(" "),s("blockquote",[s("p",[t._v("参考："),s("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/theory/distributed-transaction.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务基本原理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"十、分库分表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、分库分表"}},[t._v("#")]),t._v(" 十、分库分表")]),t._v(" "),s("blockquote",[s("p",[t._v("参考："),s("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/theory/distributed-storage.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式存储基本原理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jfox.info/20-tiao-mysql-xing-nen-you-hua-de-zui-jia-jing-yan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("20+ 条 MySQL 性能优化的最佳经验"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/788829/how-to-create-unique-row-id-in-sharded-databases",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create unique row ID in sharded databases?"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://geekswithblogs.net/shaunxu/archive/2012/01/07/sql-azure-federation-ndash-introduction.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL Azure Federation – Introduction"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"传送门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传送门"}},[t._v("#")]),t._v(" 传送门")]),t._v(" "),s("p",[t._v("◾ 🏠 "),s("a",{attrs:{href:"https://github.com/dunwu/db-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("DB-TUTORIAL 首页"),s("OutboundLink")],1),t._v(" ◾ 🎯 "),s("a",{attrs:{href:"https://github.com/dunwu/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客"),s("OutboundLink")],1),t._v(" ◾")])])}),[],!1,null,null,null);a.default=e.exports}}]);