import { Meta, StoryObj } from "@storybook/react";
import { DevelopmentErrorModal } from ".";

export default {
  title: "Dev/DevelopmentErrorModal",
  component: DevelopmentErrorModal,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "600px",
      },
    },
  },
} as Meta<typeof DevelopmentErrorModal>;

type Story = StoryObj<typeof DevelopmentErrorModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    errorMessage: "There was an error",
    errorName: "Error",
    stackTrace: `
    Buttons@http://localhost:5173/src/tabs/Buttons.tsx?t=1710663578732:5:9
    renderWithHooks@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:11763:35
    mountIndeterminateComponent@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:14492:21
    beginWork@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:15447:22
    beginWork$1@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:19248:22
    performUnitOfWork@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18693:20
    workLoopSync@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18632:30
    renderRootSync@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18611:15
    recoverFromConcurrentError@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18233:42
    performSyncWorkOnRoot@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18375:28
    flushSyncCallbacks@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:8776:30
    node_modules/react-dom/cjs/react-dom.development.js/ensureRootIsScheduled/<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18124:21
    VoidFunction*ensureRootIsScheduled@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18122:34
    scheduleUpdateOnFiber@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18067:34
    dispatchSetState@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:12607:36
    onChangeCaller@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-TN7N7RAP.js?v=1b3d1064:195:19
    $458b0a5536c1a7cf$export$40bfa8c7b0832715/setValue<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-TN7N7RAP.js?v=1b3d1064:213:21
    onSelectionChange@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-stately.js?v=1b3d1064:1136:21
    onChangeCaller@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-TN7N7RAP.js?v=1b3d1064:195:19
    $458b0a5536c1a7cf$export$40bfa8c7b0832715/setValue<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-TN7N7RAP.js?v=1b3d1064:213:21
    setSelectedKeys@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-stately.js?v=1b3d1064:701:24
    replaceSelection@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-stately.js?v=1b3d1064:883:16
    onSelect@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-aria.js?v=1b3d1064:11106:19
    $880e95eb8b93ba9a$export$ecf600387e221c37/itemPressProps.onPressStart@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-aria.js?v=1b3d1064:11192:17
    $f6c31cce2adf654f$export$45712eceda6fad21/triggerPressStart<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-aria.js?v=1b3d1064:1241:19
    $8ae05eaa5c114e9c$export$7f54fc3180508a52/<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-aria.js?v=1b3d1064:379:12
    $f6c31cce2adf654f$export$45712eceda6fad21/pressProps</pressProps2.onPointerDown@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-aria.js?v=1b3d1064:1400:35
    callCallback2@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:3575:22
    invokeGuardedCallbackDev@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:3600:24
    invokeGuardedCallback@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:3634:39
    invokeGuardedCallbackAndCatchFirstError@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:3637:33
    executeDispatch@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6672:50
    processDispatchQueueItemsInOrder@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6692:30
    processDispatchQueue@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6701:45
    dispatchEventsForPlugins@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6709:31
    node_modules/react-dom/cjs/react-dom.development.js/dispatchEventForPluginEventSystem/<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6833:20
    batchedUpdates$1@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:18409:20
    batchedUpdates@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:3480:20
    dispatchEventForPluginEventSystem@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6832:25
    dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:5163:46
    dispatchEvent@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:5157:92
    dispatchDiscreteEvent@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:5134:26
    EventListener.handleEvent*addEventBubbleListener@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:5320:18
    addTrappedEventListener@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6778:37
    listenToNativeEvent@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6735:34
    node_modules/react-dom/cjs/react-dom.development.js/listenToAllSupportedEvents/<@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6744:38
    listenToAllSupportedEvents@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:6741:29
    createRoot@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:20659:37
    createRoot$1@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/chunk-HVRFWYDF.js?v=1b3d1064:20982:18
    node_modules/react-dom/client.js/exports.createRoot@http://localhost:5173/@fs/Users/seancollings/sourcecode/aj/atomic-elements/node_modules/.vite/deps/react-dom_client.js?v=1b3d1064:21:20
    @http://localhost:5173/src/index.tsx?t=1710663578732:6:23
    `,
  },
};
